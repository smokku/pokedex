import { Instance } from "mobx-state-tree"
import { PokemonV2BerryfirmnessnameMaxFieldsModelBase } from "./PokemonV2BerryfirmnessnameMaxFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2BerryfirmnessnameMaxFieldsModel */
export interface PokemonV2BerryfirmnessnameMaxFieldsModelType extends Instance<typeof PokemonV2BerryfirmnessnameMaxFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2BerryfirmnessnameMaxFieldsModel */
export { selectFromPokemonV2BerryfirmnessnameMaxFields, pokemonV2BerryfirmnessnameMaxFieldsModelPrimitives, PokemonV2BerryfirmnessnameMaxFieldsModelSelector } from "./PokemonV2BerryfirmnessnameMaxFieldsModel.base"

/**
 * PokemonV2BerryfirmnessnameMaxFieldsModel
 *
 * aggregate max on columns
 */
export const PokemonV2BerryfirmnessnameMaxFieldsModel = PokemonV2BerryfirmnessnameMaxFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
