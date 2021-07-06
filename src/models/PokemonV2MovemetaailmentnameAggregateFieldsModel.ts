import { Instance } from "mobx-state-tree"
import { PokemonV2MovemetaailmentnameAggregateFieldsModelBase } from "./PokemonV2MovemetaailmentnameAggregateFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2MovemetaailmentnameAggregateFieldsModel */
export interface PokemonV2MovemetaailmentnameAggregateFieldsModelType extends Instance<typeof PokemonV2MovemetaailmentnameAggregateFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2MovemetaailmentnameAggregateFieldsModel */
export { selectFromPokemonV2MovemetaailmentnameAggregateFields, pokemonV2MovemetaailmentnameAggregateFieldsModelPrimitives, PokemonV2MovemetaailmentnameAggregateFieldsModelSelector } from "./PokemonV2MovemetaailmentnameAggregateFieldsModel.base"

/**
 * PokemonV2MovemetaailmentnameAggregateFieldsModel
 *
 * aggregate fields of "pokemon_v2_movemetaailmentname"
 */
export const PokemonV2MovemetaailmentnameAggregateFieldsModel = PokemonV2MovemetaailmentnameAggregateFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
