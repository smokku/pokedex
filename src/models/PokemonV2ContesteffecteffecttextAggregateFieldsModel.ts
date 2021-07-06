import { Instance } from "mobx-state-tree"
import { PokemonV2ContesteffecteffecttextAggregateFieldsModelBase } from "./PokemonV2ContesteffecteffecttextAggregateFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2ContesteffecteffecttextAggregateFieldsModel */
export interface PokemonV2ContesteffecteffecttextAggregateFieldsModelType extends Instance<typeof PokemonV2ContesteffecteffecttextAggregateFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2ContesteffecteffecttextAggregateFieldsModel */
export { selectFromPokemonV2ContesteffecteffecttextAggregateFields, pokemonV2ContesteffecteffecttextAggregateFieldsModelPrimitives, PokemonV2ContesteffecteffecttextAggregateFieldsModelSelector } from "./PokemonV2ContesteffecteffecttextAggregateFieldsModel.base"

/**
 * PokemonV2ContesteffecteffecttextAggregateFieldsModel
 *
 * aggregate fields of "pokemon_v2_contesteffecteffecttext"
 */
export const PokemonV2ContesteffecteffecttextAggregateFieldsModel = PokemonV2ContesteffecteffecttextAggregateFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
