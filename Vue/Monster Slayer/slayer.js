new Vue({
    el: '#app',
    data: {
        isActive: false,
        slayerHealth: 100,
        monsterHealth:100,
        monsterHealthBar: {
            backgroundColor: 'green',
            width: '300px'
        },
        slayerHealthBar: {
            backgroundColor: 'green',
            width: '300px'
        },
        result: '',
        log: []
    },
    methods: {
        attack: function(type){
        this.slayerAttack(type);
        this.monsterAttack(type);
        this.monsterHealthBar.width = (this.monsterHealth * 3) + 'px';
        this.slayerHealthBar.width = (this.slayerHealth *3) + 'px'; 
        },
        slayerAttack: function(type) {
            if (type === 'special'){
                // SPECIAL ATTACK
                dmgSlayer = (Math.floor(Math.random()*10)+5);
                this.monsterHealth -= dmgSlayer;
                this.log.unshift('Slayer attacked for ' + dmgSlayer + ' dmg');
            }else{
                // REGULAR ATTACK
                dmgSlayer = (Math.floor(Math.random()*5))+5;
                this.monsterHealth -= dmgSlayer;
                this.log.unshift('Slayer attacked for ' + dmgSlayer + ' dmg');
            }
        },
        monsterAttack: function(type) {
            if (type === 'special'){
                // SPECIAL ATTACK
                dmgMonster = (Math.floor(Math.random()*10)+5);
                this.slayerHealth -= dmgMonster;
                this.log.unshift('Monster attacked for ' + dmgMonster + ' dmg');
            }else{
                // REGULAR ATTACK
                dmgMonster = (Math.floor(Math.random()*5))+5;
                this.slayerHealth -= dmgMonster;
                this.log.unshift('Monster attacked for ' + dmgMonster + ' dmg');
            }      
        },
        heal: function(){
            slayerHeal = (Math.floor(Math.random()*5))+5;
            this.slayerHealth += slayerHeal;
            this.log.unshift('Slayer healed for ' + slayerHeal);
            this.slayerHealthBar.width = (this.slayerHealth * 3) + 'px';
            this.monsterAttack('regular');
        },
        endGame: function() {
            if(this.slayerHealth > this.monsterHealth){
                this.result = 'Slayer Won!';
            }else if(this.slayerHealth === this.monsterHealth){
                this.result = 'Draw';
            }else{
                this.result = 'Monster Won!';
            }
            this.isActive = false;
        },
        giveUp: function() {
            location.reload();
        },
        newGame: function() {
            // CHECK IF LOG HAS CONTENT TO RELOAD
            if (this.log.length > 1){
                location.reload();
            }
            this.isActive = true;
        }

    },
    computed: {},  
    watch: {
        slayerHealth: function() {
            if (this.slayerHealth <= 0) {this.endGame()};
            if(this.slayerHealth > 60){
                this.slayerHealthBar.backgroundColor = 'green'
            }else if(this.slayerHealth > 30){
                this.slayerHealthBar.backgroundColor = 'yellow'
            }else{
                this.slayerHealthBar.backgroundColor = 'red'
            }
        },
        monsterHealth: function() {
            if (this.monsterHealth <= 0) {this.endGame()};
            if(this.monsterHealth > 60){
                this.monsterHealthBar.backgroundColor = 'green'
            }else if(this.monsterHealth > 30){
                this.monsterHealthBar.backgroundColor = 'yellow'
            }else{
                this.monsterHealthBar.backgroundColor = 'red'
            }
        }
    }
});


