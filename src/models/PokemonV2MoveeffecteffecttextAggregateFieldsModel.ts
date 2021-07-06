import { Instance } from "mobx-state-tree"
import { PokemonV2MoveeffecteffecttextAggregateFieldsModelBase } from "./PokemonV2MoveeffecteffecttextAggregateFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2MoveeffecteffecttextAggregateFieldsModel */
export interface PokemonV2MoveeffecteffecttextAggregateFieldsModelType extends Instance<typeof PokemonV2MoveeffecteffecttextAggregateFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2MoveeffecteffecttextAggregateFieldsModel */
export { selectFromPokemonV2MoveeffecteffecttextAggregateFields, pokemonV2MoveeffecteffecttextAggregateFieldsModelPrimitives, PokemonV2MoveeffecteffecttextAggregateFieldsModelSelector } from "./PokemonV2MoveeffecteffecttextAggregateFieldsModel.base"

/**
 * PokemonV2MoveeffecteffecttextAggregateFieldsModel
 *
 * aggregate fields of "pokemon_v2_moveeffecteffecttext"
 */
export const PokemonV2MoveeffecteffecttextAggregateFieldsModel = PokemonV2MoveeffecteffecttextAggregateFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
