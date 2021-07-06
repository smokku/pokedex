import { Instance } from "mobx-state-tree"
import { PokemonV2BerryfirmnessnameAggregateFieldsModelBase } from "./PokemonV2BerryfirmnessnameAggregateFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2BerryfirmnessnameAggregateFieldsModel */
export interface PokemonV2BerryfirmnessnameAggregateFieldsModelType extends Instance<typeof PokemonV2BerryfirmnessnameAggregateFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2BerryfirmnessnameAggregateFieldsModel */
export { selectFromPokemonV2BerryfirmnessnameAggregateFields, pokemonV2BerryfirmnessnameAggregateFieldsModelPrimitives, PokemonV2BerryfirmnessnameAggregateFieldsModelSelector } from "./PokemonV2BerryfirmnessnameAggregateFieldsModel.base"

/**
 * PokemonV2BerryfirmnessnameAggregateFieldsModel
 *
 * aggregate fields of "pokemon_v2_berryfirmnessname"
 */
export const PokemonV2BerryfirmnessnameAggregateFieldsModel = PokemonV2BerryfirmnessnameAggregateFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
