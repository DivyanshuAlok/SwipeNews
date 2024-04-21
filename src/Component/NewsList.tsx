import {StyleSheet, Text, View, FlatList} from 'react-native';
import React from 'react';
import useSWR from 'swr';

const getData = async (url: string) => {
  const response = await fetch(url);
  return await response.json();
};

type Props = {};

const NewsList = (props: Props) => {
  const {data, error, isLoading} = useSWR(
    'https://newsapi.org/v2/top-headlines?country=us&apiKey=d4a41fd0899a4c86a2d98ea7002e35a4',
    getData,
  );
  if (error)
    return (
      <View>
        <Text>failed to load</Text>
      </View>
    );
  if (isLoading)
    return (
      <View>
        <Text>loading...</Text>
      </View>
    );
  return (
    <View>
      <View>
        <FlatList
          data={data.articles}
          renderItem={({item}) => (
            <View>
              <Text>{item.title}</Text>
              <Text numberOfLines={1} ellipsizeMode="tail">
                {item.description}
              </Text>
            </View>
          )}
        />
      </View>
      <Text>Developed By Consisty System</Text>
    </View>
  );
};

export default NewsList;

const styles = StyleSheet.create({});
