import { Instance } from "mobx-state-tree"
import { PokemonV2EgggroupStddevPopFieldsModelBase } from "./PokemonV2EgggroupStddevPopFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2EgggroupStddevPopFieldsModel */
export interface PokemonV2EgggroupStddevPopFieldsModelType extends Instance<typeof PokemonV2EgggroupStddevPopFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2EgggroupStddevPopFieldsModel */
export { selectFromPokemonV2EgggroupStddevPopFields, pokemonV2EgggroupStddevPopFieldsModelPrimitives, PokemonV2EgggroupStddevPopFieldsModelSelector } from "./PokemonV2EgggroupStddevPopFieldsModel.base"

/**
 * PokemonV2EgggroupStddevPopFieldsModel
 *
 * aggregate stddev_pop on columns
 */
export const PokemonV2EgggroupStddevPopFieldsModel = PokemonV2EgggroupStddevPopFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
