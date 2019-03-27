/**
 * Created by user on 23.03.2019.
 */
import React, {Component} from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableHighlight,
    ScrollView,
    Image,
    Dimensions,
    FlatList,
    TouchableOpacity,
    TextInput,
    KeyboardAvoidingView
} from 'react-native';
import Carousel from 'react-native-carousel';
import {Icon} from 'react-native-elements';
import ProfileHeader from '../../components/ProfileHeader';

const tabs = [
    {id: 1, title: 'Pastry', imgSrc: require('../../assets/pastry.jpg')},
    {id: 2, title: 'Bakery', imgSrc: require('../../assets/bakery.jpg')},
    {id: 3, title: 'Ice cream', imgSrc: require('../../assets/ice_cream.jpg')},
    {id: 4, title: 'Frost', imgSrc: require('../../assets/frost.jpeg')},
    {id: 5, title: 'Cakes', imgSrc: require('../../assets/cakes.jpg')}
];

const screenWidth = Dimensions.get('window').width;
const containerHorizontalPadding = 15;
const carouselImageWidth = screenWidth - 2 * containerHorizontalPadding;
const carouselImageHeight = Math.round(carouselImageWidth * 0.48);

export default class Main extends Component {
    static navigationOptions = {
        headerTitle: <ProfileHeader userName="Mansur Həmidov" avatarSrc={require('../../assets/avatar.jpg')}/>,
        headerStyle: {
            backgroundColor: '#E7AD0F',
            borderBottomLeftRadius: 25,
            borderBottomRightRadius: 25,
        },
        headerTintColor: '#fff',
    };

    state = {
        currentTab: 'Pastry',
        foods: [
            {id: 1, title: 'Heyvan əti', category: 'Pastry', imgSrc: require('../../assets/pastry.jpg')},
            {id: 2, title: 'Heyvan əti', category: 'Bakery', imgSrc: require('../../assets/bakery.jpg')},
            {id: 3, title: 'Heyvan əti', category: 'Ice cream', imgSrc: require('../../assets/ice_cream.jpg')},
            {id: 4, title: 'Heyvan əti', category: 'Frost', imgSrc: require('../../assets/frost.jpeg')},
            {id: 5, title: 'Heyvan əti', category: 'Cakes', imgSrc: require('../../assets/cakes.jpg')},

            {id: 6, title: 'Badımcan', category: 'Pastry', imgSrc: require('../../assets/pastry.jpg')},
            {id: 7, title: 'Badımcan', category: 'Bakery', imgSrc: require('../../assets/bakery.jpg')},
            {id: 8, title: 'Badımcan', category: 'Ice cream', imgSrc: require('../../assets/ice_cream.jpg')},
            {id: 9, title: 'Badımcan', category: 'Frost', imgSrc: require('../../assets/frost.jpeg')},
            {id: 10, title: 'Badımcan', category: 'Cakes', imgSrc: require('../../assets/cakes.jpg')},

            {id: 11, title: 'Tarakan dərmanı', category: 'Pastry', imgSrc: require('../../assets/pastry.jpg')},
            {id: 12, title: 'Tarakan dərmanı', category: 'Bakery', imgSrc: require('../../assets/bakery.jpg')},
            {id: 13, title: 'Tarakan dərmanı', category: 'Ice cream', imgSrc: require('../../assets/ice_cream.jpg')},
            {id: 14, title: 'Tarakan dərmanı', category: 'Frost', imgSrc: require('../../assets/frost.jpeg')},
            {id: 15, title: 'Tarakan dərmanı', category: 'Cakes', imgSrc: require('../../assets/cakes.jpg')},

            {id: 16, title: 'Siçan zəhəri', category: 'Pastry', imgSrc: require('../../assets/pastry.jpg')},
            {id: 17, title: 'Siçan zəhəri', category: 'Bakery', imgSrc: require('../../assets/bakery.jpg')},
            {id: 18, title: 'Siçan zəhəri', category: 'Ice cream', imgSrc: require('../../assets/ice_cream.jpg')},
            {id: 19, title: 'Siçan zəhəri', category: 'Frost', imgSrc: require('../../assets/frost.jpeg')},
            {id: 20, title: 'Siçan zəhəri', category: 'Cakes', imgSrc: require('../../assets/cakes.jpg')},

            {id: 21, title: 'Pif-paf', category: 'Pastry', imgSrc: require('../../assets/pastry.jpg')},
            {id: 22, title: 'Pif-paf', category: 'Bakery', imgSrc: require('../../assets/bakery.jpg')},
            {id: 23, title: 'Pif-paf', category: 'Ice cream', imgSrc: require('../../assets/ice_cream.jpg')},
            {id: 24, title: 'Pif-paf', category: 'Frost', imgSrc: require('../../assets/frost.jpeg')},
            {id: 25, title: 'Pif-paf', category: 'Cakes', imgSrc: require('../../assets/cakes.jpg')},

        ],
        viewedFoods: [],
        focusedSearch: false

    };

    _handleSearch (text) {
        let viewedFoods = this.state.foods.filter(food => food.category === this.state.currentTab && food.title.indexOf(text) !== -1);
        this.setState({viewedFoods});
    }

    componentDidMount () {
        let viewedFoods = this.state.foods.filter(food => food.category === this.state.currentTab);
        this.setState({viewedFoods});
    }

    render() {
        return (
            <View style={styles.mainContainer}>
                <View style={{borderRadius: 10, flexDirection: 'row', backgroundColor: '#E7AD0F'}}>
                    <ScrollView showsHorizontalScrollIndicator={false} horizontal={true} ref={node => this.scroll = node} style={{borderRadius: 10}}>
                        {
                            tabs.map((tab, k) => {
                                return (
                                    <TouchableHighlight
                                        key={k} onPress={() => this.setState({currentTab: tab.title})}
                                        style={[
                                            styles.commonTabContainer,
                                            tab.title === this.state.currentTab ? styles.activeTabContainer : styles.tabContainer,
                                        ]}>
                                        <Text
                                            style={[tab.title === this.state.currentTab ? styles.activeTabTitle : styles.tabTitle]}>{tab.title}</Text>
                                    </TouchableHighlight>
                                )
                            })
                        }
                    </ScrollView>
                    <TouchableHighlight
                        style={{flexDirection: 'row', width: 35, justifyContent: 'center', alignItems: 'center', backgroundColor: '#333', borderTopRightRadius: 10, borderBottomRightRadius: 10}}
                        onPress={() => { this.scroll.scrollTo({ x: 340 }) }}>
                        <Icon name="caret-right" type="font-awesome" color="#fff" size={18}/>
                    </TouchableHighlight>
                </View>
                <View style={{ height: carouselImageHeight + 20, paddingVertical: 10}}>
                    <Carousel
                        animate={false}
                        loop={false}
                        indicatorSize={30}
                        indicatorSpace={15}
                        indicatorOffset={-5}
                        indicatorAtBottom={false}
                        onPageChange={(page) => {
                            if(page > 3) {
                                this.scroll.scrollTo({x: 340})
                            } else {
                                this.scroll.scrollTo({x: 0})
                            }
                            this.setState({currentTab: tabs[page].title})}}>
                        {
                            tabs.map(tab =>
                                <View key={tab.id}>
                                    <Image
                                        style={{width: carouselImageWidth, height: carouselImageHeight, borderRadius: 6, borderColor: '#FFF', borderWidth: 6}}
                                        source={tab.imgSrc}/>
                                    <View style={{width: carouselImageWidth, height: carouselImageHeight, position: 'absolute', top: 0, backgroundColor: '#000', opacity: 0.3, borderRadius: 6, borderColor: '#FFF', borderWidth: 6}}/>
                                </View>
                            )
                        }
                    </Carousel>
                </View>
                <View style={{flex: 1, flexDirection: 'row', paddingRight: -10}}>
                    <FlatList
                        data={this.state.viewedFoods}
                        numColumns={2}
                        showsVerticalScrollIndicator={false}
                        renderItem={({item, index}) => (
                                <TouchableOpacity activeOpacity={0.65} key={index} style={{width: carouselImageWidth / 2 + 5, height: carouselImageHeight / 2, paddingRight: 5}}>
                                    <Text style={{position: 'absolute', top: 5, left: 5, color: '#FFF', zIndex: 2, fontSize: 13}}>{item.title} {item.id}</Text>
                                    <Image source={item.imgSrc} style={{width: carouselImageWidth/2 - 5, height: Math.round(carouselImageHeight/2) - 10, borderWidth: 3, borderColor: '#FFF', borderRadius: 6}} />
                                    <View style={{position: 'absolute', backgroundColor: '#000', top: 0, left: 0, opacity: 0.3, width: carouselImageWidth/2 - 5, height: Math.round(carouselImageHeight/2) - 10, borderWidth: 3, borderColor: '#FFF', borderRadius: 6}} />
                                    <Icon name="plus" size={18} type="material-community" containerStyle={{padding: 2, position: 'absolute', bottom: 20, right: 22, backgroundColor: '#FFF', opacity: 0.6, borderRadius: 3}}/>
                                </TouchableOpacity>
                            )
                        }
                    />
                </View>
                <View>
                    <View style={{flexDirection: 'row', borderRadius: 6, height: 35, alignItems: 'center', borderWidth: 1, borderColor: '#CCC', backgroundColor: '#FFF'}}>
                        <Icon name="search" type="font-awesome" style={{flex: 1}} color="#CCC" size={18} containerStyle={{paddingLeft: 5}}/>
                        <TextInput style={{flex: 12, paddingHorizontal: 8}} placeholder="Axtar" onChangeText={text => this._handleSearch(text)}/>
                        <TouchableHighlight style={{flex: 1}}>
                            <Icon name="times-circle" type="font-awesome" color="#CCC" size={18}/>
                        </TouchableHighlight>
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#D5D1D2',
        paddingVertical: 15,
        paddingHorizontal: containerHorizontalPadding
    },
    commonTabContainer: {
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: containerHorizontalPadding,
        paddingRight: containerHorizontalPadding,
        borderRadius: 10
    },
    activeTabContainer: {
        backgroundColor: '#333'
    },
    activeTabTitle: {
        color: '#FFF'
    },
    tabContainer: {
        backgroundColor: '#E7AD0F'
    },
    tabTitle: {
        color: '#333'
    }
});