import { Instance } from "mobx-state-tree"
import { PokemonV2EgggroupnameStddevPopFieldsModelBase } from "./PokemonV2EgggroupnameStddevPopFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2EgggroupnameStddevPopFieldsModel */
export interface PokemonV2EgggroupnameStddevPopFieldsModelType extends Instance<typeof PokemonV2EgggroupnameStddevPopFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2EgggroupnameStddevPopFieldsModel */
export { selectFromPokemonV2EgggroupnameStddevPopFields, pokemonV2EgggroupnameStddevPopFieldsModelPrimitives, PokemonV2EgggroupnameStddevPopFieldsModelSelector } from "./PokemonV2EgggroupnameStddevPopFieldsModel.base"

/**
 * PokemonV2EgggroupnameStddevPopFieldsModel
 *
 * aggregate stddev_pop on columns
 */
export const PokemonV2EgggroupnameStddevPopFieldsModel = PokemonV2EgggroupnameStddevPopFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
