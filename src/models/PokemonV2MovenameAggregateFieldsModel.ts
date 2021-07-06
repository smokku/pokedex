import { Instance } from "mobx-state-tree"
import { PokemonV2MovenameAggregateFieldsModelBase } from "./PokemonV2MovenameAggregateFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2MovenameAggregateFieldsModel */
export interface PokemonV2MovenameAggregateFieldsModelType extends Instance<typeof PokemonV2MovenameAggregateFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2MovenameAggregateFieldsModel */
export { selectFromPokemonV2MovenameAggregateFields, pokemonV2MovenameAggregateFieldsModelPrimitives, PokemonV2MovenameAggregateFieldsModelSelector } from "./PokemonV2MovenameAggregateFieldsModel.base"

/**
 * PokemonV2MovenameAggregateFieldsModel
 *
 * aggregate fields of "pokemon_v2_movename"
 */
export const PokemonV2MovenameAggregateFieldsModel = PokemonV2MovenameAggregateFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
