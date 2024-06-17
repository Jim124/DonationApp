import {
  Pressable,
  SafeAreaView,
  ScrollView,
  Text,
  View,
  Image,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';

import Header from '../../components/Header/Header';

import globalStyle from '../../assets/styles/globalStyle';
import style from './style';
import Tab from '../../components/Tab/Tab';
import Search from '../../components/Search/Search';
import SingleDonationItem from '../../components/SingleDonationItem/SingleDonationItem';
import { updateSelectedCategoryId } from '../../redux/reducers/Categories';
import { updateSelectedDonationId } from '../../redux/reducers/Donations';
import { resetToInitialState } from '../../redux/reducers/User';
import pagination from '../../util/pages';
import { Routes } from '../../navigation/Routes';
import Colors from '../../assets/styles/colors';
import { logout } from '../../api/use';

const Home = ({ navigation }) => {
  const user = useSelector((state) => state.user);
  const categories = useSelector((state) => state.categories);
  const donations = useSelector((state) => state.donations);
  const [categoryPageNumber, setCategoryPageNumber] = useState(1);
  const [categoriesList, setCategoriesList] = useState([]);
  const [donationItems, setDonationItems] = useState([]);
  const [isLoadingCategory, setIsLoadingCategory] = useState(false);
  const [searchWord, setSearchWord] = useState('');
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

  // set search
  useEffect(() => {
    const currentDonations = donations.items.filter((item) =>
      item.name.includes(searchWord)
    );
    setDonationItems(currentDonations);
  }, [searchWord]);

  const handleSearch = (search) => {
    setSearchWord(search);
  };

  function handleSelectedCategoryId(categoryId) {
    dispatch(updateSelectedCategoryId(categoryId));
  }

  function handleSelectedDonationId(donationItemId) {
    dispatch(updateSelectedDonationId(donationItemId));
    const categoryInformation = categories.categories.find(
      (category) => category.categoryId === categories.selectedCategoryId
    );
    navigation.navigate(Routes.SingleDonationItem, {
      categoryInformation: categoryInformation,
    });
  }
  return (
    <SafeAreaView style={[globalStyle.backgroundColor, globalStyle.flex]}>
      <ScrollView showsHorizontalScrollIndicator={false}>
        <View style={style.header}>
          <View style={style.headerInfoContainer}>
            <Text style={style.headerIntroText}>Hello,</Text>
            <View style={style.username}>
              <Header title={user.displayName + ' 👏'} type={1} />
            </View>
          </View>
          <View>
            <Image
              source={{ uri: user.profileUri }}
              resizeMode='contain'
              style={style.profileImage}
            />
            <TouchableOpacity
              onPress={() => {
                dispatch(resetToInitialState());
                logout();
              }}
            >
              <Header title='logout' color={Colors.logoutColor} type={3} />
            </TouchableOpacity>
          </View>
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
        <View style={style.donationsContainer}>
          {donationItems.length > 0 &&
            donationItems.map((donation) => {
              const category = categories.categories.find(
                (category) =>
                  category.categoryId === categories.selectedCategoryId
              );

              return (
                <View key={donation.donationItemId} style={style.donationItem}>
                  <SingleDonationItem
                    uri={donation.image}
                    donationTitle={donation.name}
                    price={parseFloat(donation.price)}
                    badgeTitle={category.name}
                    onPress={handleSelectedDonationId.bind(
                      this,
                      donation.donationItemId
                    )}
                  />
                </View>
              );
            })}
        </View>
      </ScrollView>

      {/*  */}
    </SafeAreaView>
  );
};

export default Home;
