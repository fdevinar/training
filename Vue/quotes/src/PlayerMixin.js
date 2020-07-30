export const PlayerMixin = {
    data() {
        return {
            mixinData: 'MIXIN',
            players: ['Jardel','Renato','Geromel','Danrlei','Everaldo','Jailson','Everton','Kannemann','Pedro Rocha',
                'Ortunho','Calvet','Lara'],
            filteredPlayer: ''
        }
    },
    created() {
        console.log('Mixin Called')
    },
    computed: {
        computedPlayer() {
        return this.players.filter((player) => {
            return player.match(this.filteredPlayer);
        });
        },
        compReverse() {
            let text = this.filtered;
            let reversed = [];
            for (let i=text.length; i--; i>0){
              reversed.push(text[i]);
            }
            reversed = reversed.toString().replace(/,/g,'');
            return reversed
        },
        compCount() {
          let text = this.filtered;
          return text + text.length
        }
    }
}