import { Instance } from "mobx-state-tree"
import { PokemonV2EgggroupAggregateFieldsModelBase } from "./PokemonV2EgggroupAggregateFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2EgggroupAggregateFieldsModel */
export interface PokemonV2EgggroupAggregateFieldsModelType extends Instance<typeof PokemonV2EgggroupAggregateFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2EgggroupAggregateFieldsModel */
export { selectFromPokemonV2EgggroupAggregateFields, pokemonV2EgggroupAggregateFieldsModelPrimitives, PokemonV2EgggroupAggregateFieldsModelSelector } from "./PokemonV2EgggroupAggregateFieldsModel.base"

/**
 * PokemonV2EgggroupAggregateFieldsModel
 *
 * aggregate fields of "pokemon_v2_egggroup"
 */
export const PokemonV2EgggroupAggregateFieldsModel = PokemonV2EgggroupAggregateFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
