import { Instance } from "mobx-state-tree"
import { PokemonV2BerryfirmnessnameStddevPopFieldsModelBase } from "./PokemonV2BerryfirmnessnameStddevPopFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2BerryfirmnessnameStddevPopFieldsModel */
export interface PokemonV2BerryfirmnessnameStddevPopFieldsModelType extends Instance<typeof PokemonV2BerryfirmnessnameStddevPopFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2BerryfirmnessnameStddevPopFieldsModel */
export { selectFromPokemonV2BerryfirmnessnameStddevPopFields, pokemonV2BerryfirmnessnameStddevPopFieldsModelPrimitives, PokemonV2BerryfirmnessnameStddevPopFieldsModelSelector } from "./PokemonV2BerryfirmnessnameStddevPopFieldsModel.base"

/**
 * PokemonV2BerryfirmnessnameStddevPopFieldsModel
 *
 * aggregate stddev_pop on columns
 */
export const PokemonV2BerryfirmnessnameStddevPopFieldsModel = PokemonV2BerryfirmnessnameStddevPopFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
