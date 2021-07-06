import { Instance } from "mobx-state-tree"
import { PokemonV2PokemonegggroupStddevPopFieldsModelBase } from "./PokemonV2PokemonegggroupStddevPopFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2PokemonegggroupStddevPopFieldsModel */
export interface PokemonV2PokemonegggroupStddevPopFieldsModelType extends Instance<typeof PokemonV2PokemonegggroupStddevPopFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2PokemonegggroupStddevPopFieldsModel */
export { selectFromPokemonV2PokemonegggroupStddevPopFields, pokemonV2PokemonegggroupStddevPopFieldsModelPrimitives, PokemonV2PokemonegggroupStddevPopFieldsModelSelector } from "./PokemonV2PokemonegggroupStddevPopFieldsModel.base"

/**
 * PokemonV2PokemonegggroupStddevPopFieldsModel
 *
 * aggregate stddev_pop on columns
 */
export const PokemonV2PokemonegggroupStddevPopFieldsModel = PokemonV2PokemonegggroupStddevPopFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
