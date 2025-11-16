import React from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  FlatList, 
  TouchableOpacity, 
  Image 
} from 'react-native';
import { Link } from 'expo-router';

const products = [
  { 
    id: '1', 
    name: 'Notebook Dell', 
    price: 3499.90,
    image: 'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=400',
    description: 'Notebook Dell Inspiron com processador Intel Core i5, 8GB RAM e 256GB SSD'
  },
  { 
    id: '2', 
    name: 'Mouse Gamer', 
    price: 159.90,
    image: 'https://images.unsplash.com/photo-1527814050087-3793815479db?w=400',
    description: 'Mouse gamer RGB com 7 botões programáveis e DPI ajustável'
  },
  { 
    id: '3', 
    name: 'Teclado Mecânico', 
    price: 349.90,
    image: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=400',
    description: 'Teclado mecânico RGB com switches blue e estrutura de alumínio'
  },
  { 
    id: '4', 
    name: 'Monitor 24"', 
    price: 899.90,
    image: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=400',
    description: 'Monitor LED 24 polegadas Full HD com taxa de atualização de 75Hz'
  },
  { 
    id: '5', 
    name: 'Headset Gamer', 
    price: 279.90,
    image: 'https://images.unsplash.com/photo-1599669454699-248893623440?w=400',
    description: 'Headset gamer surround 7.1 com microfone removível e LED RGB'
  },
  { 
    id: '6', 
    name: 'Webcam Full HD', 
    price: 189.90,
    image: 'https://images.unsplash.com/photo-1587826080692-f439cd0b70da?w=400',
    description: 'Webcam Full HD 1080p com microfone integrado e correção de luz'
  }
];

export { products };

export default function HomeScreen() {
  const renderProduct = ({ item }: { item: typeof products[0] }) => (
    <Link href={`/product/${item.id}` as any} asChild>
      <TouchableOpacity style={styles.card} activeOpacity={0.7}>
        <Image 
          source={{ uri: item.image }} 
          style={styles.image}
          resizeMode="cover"
        />
        <View style={styles.cardContent}>
          <Text style={styles.productName}>{item.name}</Text>
          <Text style={styles.price}>R$ {item.price.toFixed(2)}</Text>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Ver Detalhes</Text>
          </View>
        </View>
      </TouchableOpacity>
    </Link>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>🛍️ Produtos Disponíveis</Text>
      <FlatList
        data={products}
        renderItem={renderProduct}
        keyExtractor={item => item.id}
        numColumns={2}
        contentContainerStyle={styles.list}
        columnWrapperStyle={styles.row}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
    color: '#333',
  },
  list: {
    padding: 10,
  },
  row: {
    justifyContent: 'space-between',
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 12,
    marginBottom: 15,
    width: '48%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  image: {
    width: '100%',
    height: 120,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
  },
  cardContent: {
    padding: 12,
  },
  productName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginBottom: 8,
  },
  price: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#667eea',
    marginBottom: 12,
  },
  button: {
    backgroundColor: '#667eea',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: '600',
    fontSize: 14,
  },
});