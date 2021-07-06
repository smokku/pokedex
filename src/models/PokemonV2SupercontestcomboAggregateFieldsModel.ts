import { Instance } from "mobx-state-tree"
import { PokemonV2SupercontestcomboAggregateFieldsModelBase } from "./PokemonV2SupercontestcomboAggregateFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2SupercontestcomboAggregateFieldsModel */
export interface PokemonV2SupercontestcomboAggregateFieldsModelType extends Instance<typeof PokemonV2SupercontestcomboAggregateFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2SupercontestcomboAggregateFieldsModel */
export { selectFromPokemonV2SupercontestcomboAggregateFields, pokemonV2SupercontestcomboAggregateFieldsModelPrimitives, PokemonV2SupercontestcomboAggregateFieldsModelSelector } from "./PokemonV2SupercontestcomboAggregateFieldsModel.base"

/**
 * PokemonV2SupercontestcomboAggregateFieldsModel
 *
 * aggregate fields of "pokemon_v2_supercontestcombo"
 */
export const PokemonV2SupercontestcomboAggregateFieldsModel = PokemonV2SupercontestcomboAggregateFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
