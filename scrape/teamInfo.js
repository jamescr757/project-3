
module.exports = {
    
    teamsArray: ["bruins", "sabres", "red wings", "panthers", "canadiens", "senators", "lightning", "maple leafs", "hurricanes", "blue jackets", "devils", "islanders", "rangers", "flyers", "penguins", "capitals", "blackhawks", "avalanche", "stars", "wild", "predators", "blues", "jets", "ducks", "coyotes", "flames", "oilers", "golden knights", "kings", "sharks", "canucks"],

    teamIDGenerator(teamName) {
        return this.teamsArray.indexOf(teamName);
    },

    teamDivisionGenerator(teamName) {
        const teamIndex = this.teamIDGenerator(teamName);

        if (teamIndex <= 7 && teamIndex > -1) return "Atlantic";

        else if (teamIndex <= 15 && teamIndex > -1) return "Metropolitan";

        else if (teamIndex <= 22 && teamIndex > -1) return "Central";

        else if (teamIndex > 0) return "Pacific";

        else return false;
    },

    teamConferenceGenerator(teamName) {
        const teamIndex = this.teamIDGenerator(teamName);

        if (teamIndex <= 15 && teamIndex > -1) return "Eastern";

        else if (teamIndex > 15) return "Western";

        else return false;
    },

    teamNameConverter(teamName) {
        return teamName.replace(/\s/g, "-")
    },

    teamNameAddPlus(teamName) {
        return teamName.replace(/\s/g, "+")
    },

    teamNameDehyphenator(teamName) {
        return teamName.replace(/-/g, " ")
    },

    teamNameJoiner (team1, team2) {
        const team1Modified = team1.replace(/\s/g, "+");
        const team2Modified = team2.replace(/\s/g, "+");
        return team1Modified + "+" + team2Modified;
    },

    teamFullName (team) {

        switch (team) {
            case "bruins":
                return "boston bruins"
            case "sabres":
                return "buffalo sabres"
            case "red wings":
                return "detroit red wings"
            case "panthers":
                return "florida panthers"
            case "canadiens":
                return "montreal canadiens"
            case "senators":
                return "ottawa senators"
            case "lightning":
                return "tampa bay lightning"
            case "maple leafs":
                return "toronto maple leafs"
            case "hurricanes":
                return "carolina hurricanes"
            case "blue jackets":
                return "columbus blue jackets"
            case "devils":
                return "new jersey devils"
            case "islanders":
                return "new york islanders"
            case "rangers":
                return "new york rangers"
            case "flyers":
                return "philadelphia flyers"
            case "penguins":
                return "pittsburgh penguins"
            case "capitals":
                return "washington capitals"
            case "blackhawks":
                return "chicago blackhawks"
            case "avalanche":
                return "colorado avalanche"
            case "stars":
                return "dallas stars"
            case "wild":
                return "minnesota wild"
            case "predators":
                return "nashville predators"
            case "blues":
                return "st. louis blues"
            case "jets":
                return "winnipeg jets"
            case "ducks":
                return "anaheim ducks"
            case "coyotes":
                return "arizona coyotes"
            case "flames":
                return "calgary flames"
            case "oilers":
                return "edmonton oilers"
            case "golden knights":
                return "vegas golden knights"
            case "kings":
                return "los angeles kings"
            case "sharks":
                return "san jose sharks"
            case "canucks":
                return "vancouver canucks"
            
        }
    },

    teamNameInitials (team) {

        switch (team) {
            case "bruins":
                return "bos"
            case "sabres":
                return "buf"
            case "red wings":
                return "det"
            case "panthers":
                return "fla"
            case "canadiens":
                return "mtl"
            case "senators":
                return "ott"
            case "lightning":
                return "tb"
            case "maple leafs":
                return "tor"
            case "hurricanes":
                return "car"
            case "blue jackets":
                return "cbj"
            case "devils":
                return "nj"
            case "islanders":
                return "nyi"
            case "rangers":
                return "nyr"
            case "flyers":
                return "phi"
            case "penguins":
                return "pit"
            case "capitals":
                return "wsh"
            case "blackhawks":
                return "chi"
            case "avalanche":
                return "col"
            case "stars":
                return "dal"
            case "wild":
                return "min"
            case "predators":
                return "nsh"
            case "blues":
                return "stl"
            case "jets":
                return "wpg"
            case "ducks":
                return "ana"
            case "coyotes":
                return "ari"
            case "flames":
                return "cgy"
            case "oilers":
                return "edm"
            case "golden knights":
                return "vgs"
            case "kings":
                return "la"
            case "sharks":
                return "sj"
            case "canucks":
                return "van"
            
        }
    }
}



