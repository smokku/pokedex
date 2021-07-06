import { Instance } from "mobx-state-tree"
import { PokemonV2MoveattributemapAggregateFieldsModelBase } from "./PokemonV2MoveattributemapAggregateFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2MoveattributemapAggregateFieldsModel */
export interface PokemonV2MoveattributemapAggregateFieldsModelType extends Instance<typeof PokemonV2MoveattributemapAggregateFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2MoveattributemapAggregateFieldsModel */
export { selectFromPokemonV2MoveattributemapAggregateFields, pokemonV2MoveattributemapAggregateFieldsModelPrimitives, PokemonV2MoveattributemapAggregateFieldsModelSelector } from "./PokemonV2MoveattributemapAggregateFieldsModel.base"

/**
 * PokemonV2MoveattributemapAggregateFieldsModel
 *
 * aggregate fields of "pokemon_v2_moveattributemap"
 */
export const PokemonV2MoveattributemapAggregateFieldsModel = PokemonV2MoveattributemapAggregateFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
