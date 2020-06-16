
export { };
    
type Pitcher1 = {
    throwSpeed: number;
}
type Batter1 = {
    battingAverage: number;
}   
const Sasaki: Pitcher1 = {
    throwSpeed: 154
};
 
const Ochiai: Batter1 = {
    battingAverage: 0.367
};

// インターセクション型
type TwoWayPlayer = Pitcher1 & Batter1;

const Ohtani: TwoWayPlayer = {
    throwSpeed: 165,
    battingAverage: 0.286
}

