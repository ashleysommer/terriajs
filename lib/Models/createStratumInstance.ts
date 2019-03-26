import ModelTraits from "../Traits/ModelTraits";
import { TraitsConstructor } from "./Model";
import StratumFromTraits from "./StratumFromTraits";
import { observable } from "mobx";

/**
 * Creates a mutable stratum of a given type.
 * @param Traits The traits class for which to create a stratum.
 * @returns The stratum instance.
 */
export default function createStratumInstance<T extends TraitsConstructor<ModelTraits>>(Traits: T): StratumFromTraits<InstanceType<T>> {
    const traits = Traits.traits;
    const propertyNames = Object.keys(traits);
    const reduced: any = propertyNames.reduce((p, c) => ({ ...p, [c]: undefined }), {});
    return observable(reduced);
}
