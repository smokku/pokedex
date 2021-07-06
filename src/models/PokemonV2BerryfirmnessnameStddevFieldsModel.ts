import { Instance } from "mobx-state-tree"
import { PokemonV2BerryfirmnessnameStddevFieldsModelBase } from "./PokemonV2BerryfirmnessnameStddevFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2BerryfirmnessnameStddevFieldsModel */
export interface PokemonV2BerryfirmnessnameStddevFieldsModelType extends Instance<typeof PokemonV2BerryfirmnessnameStddevFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2BerryfirmnessnameStddevFieldsModel */
export { selectFromPokemonV2BerryfirmnessnameStddevFields, pokemonV2BerryfirmnessnameStddevFieldsModelPrimitives, PokemonV2BerryfirmnessnameStddevFieldsModelSelector } from "./PokemonV2BerryfirmnessnameStddevFieldsModel.base"

/**
 * PokemonV2BerryfirmnessnameStddevFieldsModel
 *
 * aggregate stddev on columns
 */
export const PokemonV2BerryfirmnessnameStddevFieldsModel = PokemonV2BerryfirmnessnameStddevFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
