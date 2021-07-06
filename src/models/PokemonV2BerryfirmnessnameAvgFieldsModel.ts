import { Instance } from "mobx-state-tree"
import { PokemonV2BerryfirmnessnameAvgFieldsModelBase } from "./PokemonV2BerryfirmnessnameAvgFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2BerryfirmnessnameAvgFieldsModel */
export interface PokemonV2BerryfirmnessnameAvgFieldsModelType extends Instance<typeof PokemonV2BerryfirmnessnameAvgFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2BerryfirmnessnameAvgFieldsModel */
export { selectFromPokemonV2BerryfirmnessnameAvgFields, pokemonV2BerryfirmnessnameAvgFieldsModelPrimitives, PokemonV2BerryfirmnessnameAvgFieldsModelSelector } from "./PokemonV2BerryfirmnessnameAvgFieldsModel.base"

/**
 * PokemonV2BerryfirmnessnameAvgFieldsModel
 *
 * aggregate avg on columns
 */
export const PokemonV2BerryfirmnessnameAvgFieldsModel = PokemonV2BerryfirmnessnameAvgFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
