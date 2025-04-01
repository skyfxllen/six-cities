import { RatingValue } from './rating';

export type Location = {
  latitude: number;
  longitude: number;
  zoom: number;
}

export type Point = {
  latitude: number;
  longitude: number;
};

export type City = {
  name: string;
  location: Location;
}

export type Host = {
  name: string;
  avatarUrl: string;
  isPro: boolean;
  };

export type OfferType = {
  id: string;
  title: string;
  type: string;
  price: number;
  city: City;
  location: Location;
  isFavorite: boolean;
  isPremium: boolean;
  rating: RatingValue;
  previewImage: string;
  }
