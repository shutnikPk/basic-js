module.exports = function calculateHanoi( disksNumber, turnsSpeed ) {
    
    let hanoi={}

    hanoi['turns'] = Math.pow(2, disksNumber)-1;
    turnsSpeed/=3600;
    hanoi['seconds'] = hanoi['turns']/turnsSpeed;
    return hanoi;
    
}