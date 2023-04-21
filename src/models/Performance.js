/** Class formatting the user performance data */

export class Performance {
  /**
   * Get performances data
   * @param {number} userId
   * @param {Object} kind
   * @param {Object[]}
   */
  constructor(userId, kind, data) {
    (this.id = userId), (this.kind = kind), (this.data = data);
  }

  /**
   * Get translated kind of performances
   * @returns {String} The french title of performances
   */
  translateKind = (item) => {
    switch (item) {
      case 'cardio':
        return 'Cardio';
      case 'energy':
        return 'Energie';
      case 'endurance':
        return 'Endurance';
      case 'strength':
        return 'Force';
      case 'speed':
        return 'Vitesse';
      case 'intensity':
        return 'Intensité';
      default:
        return '';
    }
  };

  /**
   * Get formatted data for radar chart
   * @returns {Object[]} The performances with subject
   */
  formatPerformance = () => {
    return this.data.map((item) => ({
      subject: this.translateKind(this.kind[item.kind]),
      value: item.value,
      fullMark: 210,
    }));
  };
}
