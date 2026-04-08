class Player:
    def __init__(self,name,age,team):
        self.name = name
        self.age = age
        self.team = team
    
    def train(self):
        return f"{self.name} is performing a standard fitness drill"
    
    def get_role(self):
        return "Utility Player"
    
    def __str__(self):
        return f"Player: {self.name} | Age: {self.age} | Club: {self.team}"
    
class Forward(Player):
    def __init__(self, name, age, team, goals_scored):
        super().__init__(name, age, team)
        self.goals_scored = goals_scored

    def train(self):
        return f"Forward {self.name}  is practicing finishing and volleys. Goals this season: {self.goals_scored}"
    
    def get_role(self):
        return "Scorer🏃‍♂️"

    def celebrate_goal(self):
        return f"{self.name} is doing a signature celebration!"
    
class Goalkeeper(Player):
    def __init__(self, name, age, team, clean_sheets):
        super().__init__(name, age, team)
        self.clean_sheets = clean_sheets
    
    def train(self):
        return f"Goalkeeper {self.name} is training reflexes and jumps. Clean sheets: {self.clean_sheets}"
    
    def get_role(self):
        return "Shot Stopper🥅"
    
    def save_ball(self):
        return f"{self.name} makes an incredible save!"
    