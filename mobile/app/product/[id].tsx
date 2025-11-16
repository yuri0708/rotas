import React from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  Image, 
  ScrollView, 
  TouchableOpacity 
} from 'react-native';
import { useLocalSearchParams, router } from 'expo-router';
import { products } from '../index';

export default function ProductDetailScreen() {
  const { id } = useLocalSearchParams();
  const product = products.find(p => p.id === id);

  if (!product) {
    return (
      <View style={styles.container}>
        <Text style={styles.errorText}>Produto não encontrado</Text>
        <TouchableOpacity 
          style={styles.backButton}
          onPress={() => router.back()}
        >
          <Text style={styles.backButtonText}>← Voltar</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
      <Image 
        source={{ uri: product.image }} 
        style={styles.image}
        resizeMode="cover"
      />
      
      <View style={styles.content}>
        <Text style={styles.productName}>{product.name}</Text>
        
        <Text style={styles.description}>{product.description}</Text>
        
        <View style={styles.priceContainer}>
          <Text style={styles.priceLabel}>Preço:</Text>
          <Text style={styles.price}>R$ {product.price.toFixed(2)}</Text>
        </View>
        
        <View style={styles.featuresContainer}>
          <Text style={styles.featuresTitle}>Características:</Text>
          <View style={styles.featureItem}>
            <Text style={styles.featureText}>✓ Garantia de 12 meses</Text>
          </View>
          <View style={styles.featureItem}>
            <Text style={styles.featureText}>✓ Frete grátis para todo o Brasil</Text>
          </View>
          <View style={styles.featureItem}>
            <Text style={styles.featureText}>✓ Parcelamento em até 12x sem juros</Text>
          </View>
          <View style={styles.featureItem}>
            <Text style={styles.featureText}>✓ Nota fiscal inclusa</Text>
          </View>
        </View>
        
        <TouchableOpacity 
          style={styles.buyButton}
          activeOpacity={0.8}
        >
          <Text style={styles.buyButtonText}>🛒 Adicionar ao Carrinho</Text>
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={styles.backButton}
          onPress={() => router.back()}
          activeOpacity={0.7}
        >
          <Text style={styles.backButtonText}>← Voltar para lista</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  image: {
    width: '100%',
    height: 300,
  },
  content: {
    padding: 20,
  },
  productName: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 15,
  },
  description: {
    fontSize: 16,
    color: '#666',
    lineHeight: 24,
    marginBottom: 20,
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f9f9f9',
    padding: 15,
    borderRadius: 10,
    marginBottom: 25,
  },
  priceLabel: {
    fontSize: 18,
    color: '#666',
    marginRight: 10,
  },
  price: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#667eea',
  },
  featuresContainer: {
    marginBottom: 25,
  },
  featuresTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 15,
  },
  featureItem: {
    paddingVertical: 8,
  },
  featureText: {
    fontSize: 16,
    color: '#555',
  },
  buyButton: {
    backgroundColor: '#667eea',
    paddingVertical: 16,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 15,
    shadowColor: '#667eea',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
  },
  buyButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  backButton: {
    backgroundColor: '#f0f0f0',
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 20,
  },
  backButtonText: {
    color: '#333',
    fontSize: 16,
    fontWeight: '600',
  },
  errorText: {
    fontSize: 18,
    color: '#666',
    textAlign: 'center',
    marginTop: 40,
  },
});