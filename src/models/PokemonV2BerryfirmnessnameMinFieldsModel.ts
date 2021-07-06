import { Instance } from "mobx-state-tree"
import { PokemonV2BerryfirmnessnameMinFieldsModelBase } from "./PokemonV2BerryfirmnessnameMinFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2BerryfirmnessnameMinFieldsModel */
export interface PokemonV2BerryfirmnessnameMinFieldsModelType extends Instance<typeof PokemonV2BerryfirmnessnameMinFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2BerryfirmnessnameMinFieldsModel */
export { selectFromPokemonV2BerryfirmnessnameMinFields, pokemonV2BerryfirmnessnameMinFieldsModelPrimitives, PokemonV2BerryfirmnessnameMinFieldsModelSelector } from "./PokemonV2BerryfirmnessnameMinFieldsModel.base"

/**
 * PokemonV2BerryfirmnessnameMinFieldsModel
 *
 * aggregate min on columns
 */
export const PokemonV2BerryfirmnessnameMinFieldsModel = PokemonV2BerryfirmnessnameMinFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
