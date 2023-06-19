import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, FlatList, TextInput,Button } from 'react-native';
import { CATEGORIES, LIVRES } from './Models/data';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const App = (navigation) => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [searchValue, setSearchValue] = useState('');
  const [selectedBook, setSelectedBook] = useState(null);


  
  const handleSearchInputChange = (text) => {
    setSearchValue(text);
  };

  const filteredLIVRES = selectedCategory && selectedCategory.id !== 'all'
    ? LIVRES.filter((livre) => livre.categorieId.includes(selectedCategory.id))
    : LIVRES;

  const filteredLIVRESByTitle = searchValue
    ? filteredLIVRES.filter((livre) =>
        livre.titre.toLowerCase().includes(searchValue.toLowerCase())
      )
    : filteredLIVRES;

    const handleCategorySelect = (category) => {
      setSelectedCategory(category === selectedCategory ? null : category);
      setSelectedBook(null); // Réinitialiser les détails du livre sélectionné
    };

  const handleBookSelect = (book) => {
    setSelectedBook(book === selectedBook ? null : book);
  };

  const renderItem = ({ item }) => (
<View style={styles.bookItem} onTouchEnd={() => handleBookSelect(item)}>
      <Image source={{ uri: item.imageUrl }} style={styles.bookImage} />
      <Text style={styles.bookTitle}>{item.titre}</Text>
      <Text style={styles.bookCategory}>{item.categorieId.join(', ')}</Text>
    </View>
  );

  return (

    
    <View style={styles.container}>
      <FlatList
        data={CATEGORIES}
        renderItem={({ item }) => (
          <View

          
            style={[
              styles.categoryItem,
              selectedCategory === item && styles.selectedCategory,
            ]}
          >
            
            <Text onPress={() => handleCategorySelect(item)}>{item.genre}</Text>
       
          
          </View>
        )}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.categoryListContainer}
      />

      <TextInput
        style={styles.searchInput}
        placeholder="Rechercher un livre..."
        value={searchValue}
        onChangeText={handleSearchInputChange}
      />

      {selectedBook && (
        <View style={styles.selectedBookContainer}>
          <Image source={{ uri: selectedBook.imageUrl }} style={styles.selectedBookImage} />
          <Text style={styles.selectedBookTitle}>{selectedBook.titre}</Text>
          <Text style={styles.selectedBookDescription}>{selectedBook.description}</Text>
        </View>
      )}

      <Text style={styles.sectionTitle}>Livres :</Text>
      <FlatList
        data={filteredLIVRESByTitle}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.bookListContainer}
      />
     <Button
        title="Ajouter un film"
        onPress={() => navigation.navigate('AddFilm')}
        style={styles.smallButton}
        titleStyle={styles.smallButtonText}
      />

      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 5,
    paddingHorizontal: 5,
    backgroundColor: '#fff',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonSpacing: {
    marginHorizontal: 10,
  },
  smallButton: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
    backgroundColor: '#ccc',
  },
  smallButtonText: {
    fontSize: 14,
  },

  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  categoryListContainer: {
    marginBottom: 5,
  },
  categoryItem: {
    marginRight: 10,
    padding: 5,
    borderRadius: 5,
  },
  selectedCategory: {
    backgroundColor: '#f0f0f0',
  },
  bookListContainer: {
    marginBottom: 20,
  },
  bookItem: {
    marginRight: 20,
    width: 150,
  },
  bookTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  bookCategory: {
    fontSize: 14,
    color: '#888',
  },
  bookImage: {
    width: 100,
    height: 150,
    marginBottom: 10,
    resizeMode: 'cover',
  },
  searchInput: {
    marginBottom: 5,
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: '#888',
    borderRadius: 5,
  },
  selectedBookContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
  selectedBookImage: {
    width: 200,
    height: 300,
    marginBottom: 10,
    resizeMode: 'cover',
  },
  selectedBookTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  selectedBookDescription: {
    fontSize: 16,
    textAlign: 'center',
    marginHorizontal: 20,
  },
});

export default App;
