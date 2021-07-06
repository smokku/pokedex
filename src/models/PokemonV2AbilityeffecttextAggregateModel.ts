import { Instance } from "mobx-state-tree"
import { PokemonV2AbilityeffecttextAggregateModelBase } from "./PokemonV2AbilityeffecttextAggregateModel.base"

/* The TypeScript type of an instance of PokemonV2AbilityeffecttextAggregateModel */
export interface PokemonV2AbilityeffecttextAggregateModelType extends Instance<typeof PokemonV2AbilityeffecttextAggregateModel.Type> {}

/* A graphql query fragment builders for PokemonV2AbilityeffecttextAggregateModel */
export { selectFromPokemonV2AbilityeffecttextAggregate, pokemonV2AbilityeffecttextAggregateModelPrimitives, PokemonV2AbilityeffecttextAggregateModelSelector } from "./PokemonV2AbilityeffecttextAggregateModel.base"

/**
 * PokemonV2AbilityeffecttextAggregateModel
 *
 * aggregated selection of "pokemon_v2_abilityeffecttext"
 */
export const PokemonV2AbilityeffecttextAggregateModel = PokemonV2AbilityeffecttextAggregateModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
