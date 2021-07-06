import { Instance } from "mobx-state-tree"
import { PokemonV2BerryfirmnessnameStddevSampFieldsModelBase } from "./PokemonV2BerryfirmnessnameStddevSampFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2BerryfirmnessnameStddevSampFieldsModel */
export interface PokemonV2BerryfirmnessnameStddevSampFieldsModelType extends Instance<typeof PokemonV2BerryfirmnessnameStddevSampFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2BerryfirmnessnameStddevSampFieldsModel */
export { selectFromPokemonV2BerryfirmnessnameStddevSampFields, pokemonV2BerryfirmnessnameStddevSampFieldsModelPrimitives, PokemonV2BerryfirmnessnameStddevSampFieldsModelSelector } from "./PokemonV2BerryfirmnessnameStddevSampFieldsModel.base"

/**
 * PokemonV2BerryfirmnessnameStddevSampFieldsModel
 *
 * aggregate stddev_samp on columns
 */
export const PokemonV2BerryfirmnessnameStddevSampFieldsModel = PokemonV2BerryfirmnessnameStddevSampFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
