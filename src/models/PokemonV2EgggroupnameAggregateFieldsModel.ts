import { Instance } from "mobx-state-tree"
import { PokemonV2EgggroupnameAggregateFieldsModelBase } from "./PokemonV2EgggroupnameAggregateFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2EgggroupnameAggregateFieldsModel */
export interface PokemonV2EgggroupnameAggregateFieldsModelType extends Instance<typeof PokemonV2EgggroupnameAggregateFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2EgggroupnameAggregateFieldsModel */
export { selectFromPokemonV2EgggroupnameAggregateFields, pokemonV2EgggroupnameAggregateFieldsModelPrimitives, PokemonV2EgggroupnameAggregateFieldsModelSelector } from "./PokemonV2EgggroupnameAggregateFieldsModel.base"

/**
 * PokemonV2EgggroupnameAggregateFieldsModel
 *
 * aggregate fields of "pokemon_v2_egggroupname"
 */
export const PokemonV2EgggroupnameAggregateFieldsModel = PokemonV2EgggroupnameAggregateFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
