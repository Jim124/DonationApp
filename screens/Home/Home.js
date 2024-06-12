import {
  Pressable,
  SafeAreaView,
  ScrollView,
  Text,
  View,
  Image,
  FlatList,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';

import Header from '../../components/Header/Header';

import globalStyle from '../../assets/styles/globalStyle';
import style from './style';
import Button from '../../components/Button/Button';
import Tab from '../../components/Tab/Tab';
import Badge from '../../components/Badge/Badge';
import Search from '../../components/Search/Search';
import SingleDonationItem from '../../components/SingleDonationItem/SingleDonationItem';
import { horizontalScale } from '../../assets/styles/scaling';
import {
  updateFirstName,
  resetToInitialState,
} from '../../redux/reducers/User';
import { updateSelectedCategoryId } from '../../redux/reducers/Categories';
import pagination from '../../util/pages';

const Home = () => {
  const user = useSelector((state) => state.user);
  const categories = useSelector((state) => state.categories);
  const donations = useSelector((state) => state.donations);
  const [categoryPageNumber, setCategoryPageNumber] = useState(1);
  const [categoriesList, setCategoriesList] = useState([]);
  const [donationItems, setDonationItems] = useState([]);
  console.log(donationItems);
  const [isLoadingCategory, setIsLoadingCategory] = useState(false);
  const categoryPageSize = 4;
  const dispatch = useDispatch();

  //set donationItems
  useEffect(() => {
    const donationItems = donations.items.filter((item) =>
      item.categoryIds.includes(categories.selectedCategoryId)
    );
    setDonationItems(donationItems);
  }, [categories.selectedCategoryId, setDonationItems, donations]);

  // set category
  useEffect(() => {
    setIsLoadingCategory(true);
    const initCategories = pagination(
      categories.categories,
      categoryPageNumber,
      categoryPageSize
    );
    setCategoriesList(initCategories);
    setCategoryPageNumber((currentNum) => currentNum + 1);
    setIsLoadingCategory(false);
  }, []);

  const handleSearch = (search) => {
    console.log('search:' + search);
  };

  function handleSelectedCategoryId(categoryId) {
    dispatch(updateSelectedCategoryId(categoryId));
  }
  return (
    <SafeAreaView style={[globalStyle.backgroundColor, globalStyle.flex]}>
      <ScrollView showsHorizontalScrollIndicator={false}>
        <View style={style.header}>
          <View style={style.headerInfoContainer}>
            <Text style={style.headerIntroText}>Hello,</Text>
            <View style={style.username}>
              <Header title={user.firstName + user.lastName + ' 👏'} type={1} />
            </View>
          </View>
          <Image
            source={{ uri: user.profileUri }}
            resizeMode='contain'
            style={style.profileImage}
          />
        </View>
        <View style={style.searchBox}>
          <Search placeholder={'Search'} onSearch={handleSearch} />
        </View>

        <Pressable style={style.highlightedImageContainer}>
          <Image
            source={require('../../assets/images/highlighted_image.png')}
            resizeMode='contain'
            style={style.highlightedImage}
          />
        </Pressable>
        <View style={style.categoryHeader}>
          <Header title='select category' type={2} />
        </View>
        <View style={style.categories}>
          <FlatList
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            onEndReachedThreshold={0.5}
            onEndReached={() => {
              if (isLoadingCategory) {
                return;
              }
              setIsLoadingCategory(true);
              const categoriesData = pagination(
                categories.categories,
                categoryPageNumber,
                categoryPageSize
              );
              if (categoriesData.length > 0) {
                setCategoriesList((currentList) => [
                  ...currentList,
                  ...categoriesData,
                ]);
                setCategoryPageNumber((currentNum) => currentNum + 1);
                setIsLoadingCategory(false);
              }
            }}
            data={categoriesList}
            keyExtractor={(item) => item.categoryId}
            renderItem={({ item }) => (
              <View style={style.categoryItem}>
                <Tab
                  tabId={item.categoryId}
                  title={item.name}
                  isInactive={item.categoryId !== categories.selectedCategoryId}
                  onPress={handleSelectedCategoryId.bind(this, item.categoryId)}
                />
              </View>
            )}
          />
        </View>
      </ScrollView>

      {/*  */}
    </SafeAreaView>
  );
};

export default Home;
