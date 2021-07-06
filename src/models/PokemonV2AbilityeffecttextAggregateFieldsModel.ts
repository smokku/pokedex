import { Instance } from "mobx-state-tree"
import { PokemonV2AbilityeffecttextAggregateFieldsModelBase } from "./PokemonV2AbilityeffecttextAggregateFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2AbilityeffecttextAggregateFieldsModel */
export interface PokemonV2AbilityeffecttextAggregateFieldsModelType extends Instance<typeof PokemonV2AbilityeffecttextAggregateFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2AbilityeffecttextAggregateFieldsModel */
export { selectFromPokemonV2AbilityeffecttextAggregateFields, pokemonV2AbilityeffecttextAggregateFieldsModelPrimitives, PokemonV2AbilityeffecttextAggregateFieldsModelSelector } from "./PokemonV2AbilityeffecttextAggregateFieldsModel.base"

/**
 * PokemonV2AbilityeffecttextAggregateFieldsModel
 *
 * aggregate fields of "pokemon_v2_abilityeffecttext"
 */
export const PokemonV2AbilityeffecttextAggregateFieldsModel = PokemonV2AbilityeffecttextAggregateFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
