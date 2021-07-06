import { Instance } from "mobx-state-tree"
import { PokemonV2PokemonegggroupAggregateFieldsModelBase } from "./PokemonV2PokemonegggroupAggregateFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2PokemonegggroupAggregateFieldsModel */
export interface PokemonV2PokemonegggroupAggregateFieldsModelType extends Instance<typeof PokemonV2PokemonegggroupAggregateFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2PokemonegggroupAggregateFieldsModel */
export { selectFromPokemonV2PokemonegggroupAggregateFields, pokemonV2PokemonegggroupAggregateFieldsModelPrimitives, PokemonV2PokemonegggroupAggregateFieldsModelSelector } from "./PokemonV2PokemonegggroupAggregateFieldsModel.base"

/**
 * PokemonV2PokemonegggroupAggregateFieldsModel
 *
 * aggregate fields of "pokemon_v2_pokemonegggroup"
 */
export const PokemonV2PokemonegggroupAggregateFieldsModel = PokemonV2PokemonegggroupAggregateFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
