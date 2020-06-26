new Vue({
    el: '#app',
    data: {
        isActive: false,
        slayerHealth: 100,
        monsterHealth:100,
        monsterHealthBar: {
            backgroundColor: 'green',
            width: '100px'
        },
        slayerHealthBar: {
            backgroundColor: 'green',
            width: '100px'
        }

    },
    methods: {
        attack: function(type){
        this.slayerAttack(type);
        this.monsterAttack(type);
        this.monsterHealthBar.width = this.monsterHealth + 'px';
        this.slayerHealthBar.width = this.slayerHealth + 'px'; 
        },
        slayerAttack: function(type) {
            if (type === 'special'){
                // SPECIAL ATTACK
                dmgSlayer = Math.floor(Math.random()*10);
                this.monsterHealth -= dmgSlayer;
                console.log('Slayer Dmg: ' + dmgSlayer);
            }else{
                // REGULAR ATTACK
                dmgSlayer = Math.floor(Math.random()*5);
                this.monsterHealth -= dmgSlayer;
                console.log('Slayer Dmg: ' + dmgSlayer);
            }
        },
        monsterAttack: function(type) {
            if (type === 'special'){
                // SPECIAL ATTACK
                dmgMonster = Math.floor(Math.random()*10);
                this.slayerHealth -= dmgMonster;
                console.log('Monster Dmg: ' + dmgMonster);
            }else{
                // REGULAR ATTACK
                dmgMonster = Math.floor(Math.random()*5);
                this.slayerHealth -= dmgMonster;
                console.log('Monster Dmg: ' + dmgMonster);
            }      
        },
        heal: function(){
            slayerHeal = Math.floor(Math.random()*5);
            this.slayerHealth += slayerHeal;
            console.log('Slayer healed for ' + slayerHeal);
            this.slayerHealthBar.width = this.slayerHealth + 'px';
            this.monsterAttack('regular');
        }

    },
    computed: {},  
    watch: {
        slayerHealth: function() {
            if(this.slayerHealth > 60){
                this.slayerHealthBar.backgroundColor = 'green'
            }else if(this.slayerHealth > 30){
                this.slayerHealthBar.backgroundColor = 'yellow'
            }else{
                this.slayerHealthBar.backgroundColor = 'red'
            }
        },
        monsterHealth: function() {
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


