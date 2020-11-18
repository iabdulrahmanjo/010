import zoo from "../icons/zoo.png";
import watch from "../icons/watch.png";
import wallet from "../icons/wallet.png";
import tshirt from "../icons/tshirt.png";
import train from "../icons/train.png";
import towel from "../icons/towel.png";
import toothbrush from "../icons/toothbrush.png";
import tissue from "../icons/tissue.png";
import theme from "../icons/theme.png";
import television from "../icons/television.png";
import table from "../icons/table.png";
import swimmingPool from "../icons/swimming-pool.png";
import stroller from "../icons/stroller.png";
import socks from "../icons/socks.png";
import soap from "../icons/soap.png";
import restaurant from "../icons/restaurant.png";
import popcorn from "../icons/popcorn.png";
import pizza from "../icons/pizza.png";
import perfume from "../icons/perfume.png";
import pepper from "../icons/pepper.png";
import mobile from "../icons/mobile.png";
import mirror from "../icons/mirror.png";
import mask from "../icons/mask.png";
import laptop from "../icons/laptop.png";
import jeans from "../icons/jeans.png";
import iceCream from "../icons/ice-cream.png";
import hospital from "../icons/hospital.png";
import gym from "../icons/gym.png";
import glasses from "../icons/glasses.png";
import flowers from "../icons/flowers.png";
import flipFlops from "../icons/flip-flops.png";
import flashlight from "../icons/flashlight.png";
import donut from "../icons/donut.png";
import cap from "../icons/cap.png";
import card from "../icons/card.png";
import chair from "../icons/chair.png";
import chocolate from "../icons/chocolate.png";
import cinema from "../icons/cinema.png";
import coffee from "../icons/coffee.png";
import airport from "../icons/airport.png";
import beach from "../icons/beach.png";
import bell from "../icons/bell.png";
import bookshelf from "../icons/bookshelf.png";
import bowling from "../icons/bowling.png";
import cake from "../icons/cake.png";
import camera from "../icons/camera.png";
import agenda from "../icons/agenda.png";

const getIcon = (fileName) => {
  switch (fileName) {
    case "flashlight":
      return flashlight;
    case "flip-flops":
      return flipFlops;
    case "flowers":
      return flowers;
    case "pepper":
      return pepper;
    case "mobile":
      return mobile;
    case "mirror":
      return mirror;
    case "mask":
      return mask;
    case "laptop":
      return laptop;
    case "jeans":
      return jeans;
    case "ice-cream":
      return iceCream;
    case "hospital":
      return hospital;
    case "gym":
      return gym;
    case "glasses":
      return glasses;
    case "chocolate":
      return chocolate;
    case "chair":
      return chair;
    case "card":
      return card;
    case "cap":
      return cap;
    case "donut":
      return donut;
    case "agenda":
      return agenda;
    case "camera":
      return camera;
    case "cake":
      return cake;
    case "bowling":
      return bowling;
    case "bookshelf":
      return bookshelf;
    case "bell":
      return bell;
    case "beach":
      return beach;
    case "airport":
      return airport;
    case "coffee":
      return coffee;
    case `cinema`:
      return cinema;
    case "zoo":
      return zoo;
    case "perfume":
      return perfume;
    case "pizza":
      return pizza;
    case "popcorn":
      return popcorn;
    case "restaurant":
      return restaurant;
    case "soap":
      return soap;
    case "socks":
      return socks;
    case "stroller":
      return stroller;
    case "swimming-pool":
      return swimmingPool;
    case "table":
      return table;
    case "television":
      return television;
    case "theme":
      return theme;
    case "tissue":
      return tissue;
    case "toothbrush":
      return toothbrush;
    case "towel":
      return towel;
    case "train":
      return train;
    case "tshirt":
      return tshirt;
    case "wallet":
      return wallet;
    case "watch":
      return watch;
    default:
      break;
  }
};

export default getIcon;
