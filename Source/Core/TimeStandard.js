/*global define*/
define(function() {
    "use strict";

    /**
     * Provides the type of time standards which JulianDate can take as input.
     *
     * @exports TimeStandard
     *
     * @see JulianDate
     */
    var TimeStandard = {
        /**
         * Represents the coordinated Universal Time (UTC) time standard.
         *
         * UTC is related to TAI according to the relationship
         * <code>UTC = TAI - deltaT</code> where <code>deltaT</code> is the number of leap
         * seconds which have been introduced as of the time in TAI.
         *
         */
        UTC : 0,

        /**
         * Represents the International Atomic Time (TAI) time standard.
         * TAI is the principal time standard to which the other time standards are related.
         */
        TAI : 1,

        /**
         * Determines if the provided value is a valid TimeStandard.
         *
         * @param {Object} [timeStandard] The value to be checked.
         *
         * @return {Boolean} <code>true</code> if the provided value is a valid <code>TimeStandard</code>.
         *
         */
        isKnownStandard : function(timeStandard) {
            return (timeStandard === TimeStandard.UTC) || (timeStandard === TimeStandard.TAI);
        }
    };

    return TimeStandard;
});