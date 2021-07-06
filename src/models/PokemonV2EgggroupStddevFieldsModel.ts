import { Instance } from "mobx-state-tree"
import { PokemonV2EgggroupStddevFieldsModelBase } from "./PokemonV2EgggroupStddevFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2EgggroupStddevFieldsModel */
export interface PokemonV2EgggroupStddevFieldsModelType extends Instance<typeof PokemonV2EgggroupStddevFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2EgggroupStddevFieldsModel */
export { selectFromPokemonV2EgggroupStddevFields, pokemonV2EgggroupStddevFieldsModelPrimitives, PokemonV2EgggroupStddevFieldsModelSelector } from "./PokemonV2EgggroupStddevFieldsModel.base"

/**
 * PokemonV2EgggroupStddevFieldsModel
 *
 * aggregate stddev on columns
 */
export const PokemonV2EgggroupStddevFieldsModel = PokemonV2EgggroupStddevFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
