function walk(curr: BinaryNode<Number> | null, path: number[]): number[] {
    if (!curr) {
        return path;
    }

    // recurse
    // pre

    // recurse
    walk(curr.left, path);
    walk(curr.right, path);
    path.push(curr.value as number);

    // post
    return path;
}

export default function post_order_search(head: BinaryNode<number>): number[] {
    return walk(head, []);
}