import json

global_board = []
num_empty_slots = 0


def main():
    global_board
    num_empty_slots

    global_board = read_board()
    empty_slots = get_empty_slots(global_board)
    eliminate_naked_singles(global_board, empty_slots)
    empty_slots = get_empty_slots(global_board)
    num_empty_slots = len(empty_slots) - 1
    solve_recursive(empty_slots, 0)
    print("Done!")
    display_board(global_board)


def read_board():
    # with open(f"python/cse131/lab04/boards/saved.json", "r") as read_file:
    data = json.load(read_file)
    
    board = data['board']

    return board


def get_empty_slots(board):
    empty_slots = []

    for i1 in range(len(board)):
        for i2 in range(len(board[i1])):
            if board[i1][i2] == 0:
                empty_slots.append([i1,i2])

    return empty_slots


def eliminate_naked_singles(board, empty_slots):
    all_possible_values = []

    for slot in empty_slots:
        slot_values = get_possible_values(board, slot)
        all_possible_values.append(slot_values)

    for i in range(len(all_possible_values)):
        if len(all_possible_values[i]) == 1:
            board[empty_slots[i][0]][empty_slots[i][1]] = all_possible_values[i][0]


def eliminate_hidden_singles(board, empty_slots):
    for i in range(len(empty_slots)):
        possible_values = get_possible_values(board, empty_slots[i])

        i2 = 0
        checksDone = False

        while checksDone == False:
            # Check row.
            rowDone = False
            i3 = i + 1

            while rowDone == False:
                if empty_slots[i3][0] != empty_slots[i][0]:
                    rowDone = True

                if rowDone == False:
                    if possible_values[i2] in get_possible_values(board, empty_slots[i3]):
                        possible_values.remove(possible_values[i2])
                        i3 += 1
                    else:
                        board[empty_slots[i][0]][empty_slots[i][1]] = possible_values[i2]
                        checksDone = True
                        rowDone = True


            # Check column.
            columnDone = False
            i4 = i + 1

            while columnDone == False:
                if empty_slots[0][0] != empty_slots[i][0]:
                    columnDone = True
                    

                



def get_possible_values(board, coordinate):
    values = [1,2,3,4,5,6,7,8,9]
    i = 0

    while i < len(values):
        if check_number(board, coordinate, values[i]) == False:
            del values[i]
        else:
            i+=1

    return values


def check_number(board, coordinate, number):

    row = coordinate[0]
    column = coordinate[1]

    # Check row.
    if number in board[row]:
        return False

    # Check column
    for i in range(0,9):
        if number == board[i][column]:
            return False

    # Check 9x9
    # Define horizontal range.
    if column == 0 or column == 1 or column == 2:
        horizontal_range = [0,1,2]
    elif column == 3 or column == 4 or column == 5:
        horizontal_range = [3,4,5]
    elif column == 6 or column == 7 or column == 8:
        horizontal_range = [6,7,8]

    # Define vertical range.
    if row == 0 or row == 1 or row == 2:
        vertical_range = [0,1,2]
    elif row == 3 or row == 4 or row == 5:
        vertical_range = [3,4,5]
    elif row == 6 or row == 7 or row == 8:
        vertical_range = [6,7,8]

    for vertical_check in vertical_range:
        for horizontal_check in horizontal_range:
            if number == board[vertical_check][horizontal_check]:
                return False

    return True


def update_board(coordinate, number):
    global_board[coordinate[0]][coordinate[1]] = number


def solve_recursive(empty_slots, space_checking):
    global_board

    entry_board_state = []

    # Paste current state of board in 
    for i in range(9):
        entry_board_state.append([0,]*9)

    for i1 in range(len(global_board)):
        for i2 in range(len(global_board[i1])):
            entry_board_state[i1][i2] = global_board[i1][i2]

    coordinate = empty_slots[space_checking]
    possible_values = get_possible_values(global_board, coordinate)

    if len(possible_values) < 1:
        return False
    
    for i in range(len(possible_values)):
        # Reset the board to its entry state each iteration.
        for i1 in range(len(entry_board_state)):
            for i2 in range(len(entry_board_state[i1])):
                global_board[i1][i2] = entry_board_state[i1][i2]

        # Place potential number on board
        update_board(coordinate, possible_values[i])
        # print("\n--------------------")
        # display_board(global_board)
        print(f"\n Coordinate checking: {coordinate}")
        print(f"\n Possible values: {possible_values}")
        print(f"\n Value checking: {possible_values[i]}")

        # If this is the last space, return true.
        if space_checking == num_empty_slots:
            return True

        # If the next function down returns true, return true, as
        # solution has been found.
        if solve_recursive(empty_slots, space_checking+1) == True:
            return True

    for i1 in range(len(entry_board_state)):
            for i2 in range(len(entry_board_state[i1])):
                global_board[i1][i2] = entry_board_state[i1][i2]

    return False
        

def display_board(board):
    print("\n   A B C D E F G H I")
    print(f"1  {board[0][0]} {board[0][1]} {board[0][2]}|{board[0][3]} {board[0][4]} {board[0][5]}|{board[0][6]} {board[0][7]} {board[0][8]}")
    print(f"2  {board[1][0]} {board[1][1]} {board[1][2]}|{board[1][3]} {board[1][4]} {board[1][5]}|{board[1][6]} {board[1][7]} {board[1][8]}")
    print(f"3  {board[2][0]} {board[2][1]} {board[2][2]}|{board[2][3]} {board[2][4]} {board[2][5]}|{board[2][6]} {board[2][7]} {board[2][8]}")
    print("   -----+-----+-----")
    print(f"4  {board[3][0]} {board[3][1]} {board[3][2]}|{board[3][3]} {board[3][4]} {board[3][5]}|{board[3][6]} {board[3][7]} {board[3][8]}")
    print(f"5  {board[4][0]} {board[4][1]} {board[4][2]}|{board[4][3]} {board[4][4]} {board[4][5]}|{board[4][6]} {board[4][7]} {board[4][8]}")
    print(f"6  {board[5][0]} {board[5][1]} {board[5][2]}|{board[5][3]} {board[5][4]} {board[5][5]}|{board[5][6]} {board[5][7]} {board[5][8]}")
    print("   -----+-----+-----")
    print(f"7  {board[6][0]} {board[6][1]} {board[6][2]}|{board[6][3]} {board[6][4]} {board[6][5]}|{board[6][6]} {board[6][7]} {board[6][8]}")
    print(f"8  {board[7][0]} {board[7][1]} {board[7][2]}|{board[7][3]} {board[7][4]} {board[7][5]}|{board[7][6]} {board[7][7]} {board[7][8]}")
    print(f"9  {board[8][0]} {board[8][1]} {board[8][2]}|{board[8][3]} {board[8][4]} {board[8][5]}|{board[8][6]} {board[8][7]} {board[8][8]}")
    


if __name__ == "__main__":
    main()