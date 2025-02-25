function walk(curr: BinaryNode<Number> | null, path: number[]): number[] {
    if (!curr) {
        return path;
    }

    // recurse
    // pre

    // recurse
    walk(curr.left, path);
    path.push(curr.value as number);
    walk(curr.right, path);

    // post
    return path;
}

export default function in_order_search(head: BinaryNode<number>): number[] {
    return walk(head, []);
}