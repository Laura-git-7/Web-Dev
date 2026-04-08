from models import Player, Forward, Goalkeeper

def main():
    p1 = Forward("Cristiano Ronaldo",41,"Al Nasr",400)
    p2 = Goalkeeper("Temirlan Anarbekov",23, "Kairat",10)
    p3 = Player("James Milner", 38, "Brighton")

    listPlayer = [p1,p2,p3]

    print("⚽⚽⚽Information⚽⚽⚽")
    for player in listPlayer:
        print(player)

        print(f"Role: {player.get_role()}")
        print(f"Activity: {player.train()}")

        if isinstance(player, Forward):
            print(f"Action: {player.celebrate_goal()}")
        elif isinstance(player, Goalkeeper):
            print(f"Action: {player.save_ball()}")
        
        print("⚽"*20)

if __name__ == "__main__":
    main()