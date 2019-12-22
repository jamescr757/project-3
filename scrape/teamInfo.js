
module.exports = {
    
    teamsArray: ["bruins", "sabres", "red wings", "panthers", "canadiens", "senators", "lightning", "maple leafs", "hurricanes", "blue jackets", "devils", "islanders", "rangers", "flyers", "penguins", "capitals", "blackhawks", "avalanche", "stars", "wild", "predators", "blues", "jets", "ducks", "coyotes", "flames", "oilers", "golden knights", "kings", "sharks", "canucks"],

    teamIDGenerator(teamName) {
        return this.teamsArray.indexOf(teamName);
    },

    teamDivisionGenerator(teamName) {
        const teamIndex = this.teamIDGenerator(teamName);

        if (teamIndex <= 7) return "Atlantic";

        else if (teamIndex <= 15) return "Metropolitan";

        else if (teamIndex <= 22) return "Central";

        else return "Pacific";
    },

    teamConferenceGenerator(teamName) {
        const teamIndex = this.teamIDGenerator(teamName);

        if (teamIndex <= 15) return "Eastern";

        else return "Western";
    },
}

