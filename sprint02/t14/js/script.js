function total(addCount, addPrice, currentTotal) {
    if (currentTotal)
        currentTotal += addCount * addPrice;
    else
        currentTotal = addCount * addPrice;
    return currentTotal;
}
