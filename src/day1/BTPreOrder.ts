function walk(curr: BinaryNode<Number> | null, path: number[]): number[] {
    if (!curr) {
        return path;
    }

    // recurse
    // pre
    path.push(curr.value as number);

    // recurse
    walk(curr.left, path);
    walk(curr.right, path);

    // post
    return path;
}

export default function pre_order_search(head: BinaryNode<number>): number[] {
    return walk(head, []);
}