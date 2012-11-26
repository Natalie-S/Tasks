// Learn more about F# at http://fsharp.net
let rec function3_1 list acc position currentPosition = 
    match list with 
    | head0 :: head1 :: head2 :: tail -> if((head0 + head2) > acc) 
                                         then function3_1 (head1 :: head2 :: tail) (head0 + head2) currentPosition (currentPosition + 1) 
                                         else function3_1 (head1 :: head2 :: tail) acc position (currentPosition + 1)
    | _ -> position
//let list = [1; 5; 6; 2; 9] 
//let ans = function3_1 list 0 2 2
//printfn "%d" ans

let rec contains list element = 
    match list with 
    | head :: tail -> (head = element) || (contains tail element)
    | [] -> false
let rec function3_2 list =
    match list with
    | head :: tail -> not (contains tail head) && function3_2 tail
    | [] -> true

let list = [1; 2; 5; 6; 2; 9] 
//let ans = function3_2 list
//printfn "%b" ans    

let function3_3_1 (list : int list) = List.map (fun x -> (x + 1) % 2) list |> List.sum
//let ans = function3_3_1 list
//printfn "%d" ans

let function3_3_2 list = List.filter(fun x -> x % 2 = 0) list |> List.length
//let ans = function3_3_2 list
//printfn "%d" ans

let function3_3_3 list = List.fold (fun acc x -> acc + (x + 1) % 2) 0 list
//let ans = function3_3_3 list
//printfn "%d" ans

type Tree<'a> = 
    | Tree of 'a * Tree<'a> * Tree<'a>
    | Tip of 'a

let rec function3_4 tree = 
    match tree with
    | Tree(_, l, r) -> 1 + (max (function3_4 l) (function3_4 r)) 
    | Tip _ -> 1 
    

let rec isPrimeHelper a acc =   if (a % acc <> 0) then isPrimeHelper a (acc + 1)
                                else if acc = a then true 
                                     else false;;
let isPrime a = isPrimeHelper a 2;;
let naturals = Seq.initInfinite (fun x -> x + 2)
let res = Seq.filter isPrime naturals
let ress = Seq.take 20 res
printfn "%A" ress




type Expression =
| Plus of Expression * Expression
| Minus of Expression * Expression
| Multiply of Expression * Expression
| UnaryMinus of Expression
| Const of int

let ``2+3*4`` = Plus(Const 2, Multiply(Const 3, Const 4))

let rec count (expr: Expression) = 
    match expr with
    | Const a -> a
    | Plus (z, p) -> count z + count p
    |UnaryMinus o -> -count o
    




