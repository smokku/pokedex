import { Instance } from "mobx-state-tree"
import { PokemonV2PalparkareanameStddevPopFieldsModelBase } from "./PokemonV2PalparkareanameStddevPopFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2PalparkareanameStddevPopFieldsModel */
export interface PokemonV2PalparkareanameStddevPopFieldsModelType extends Instance<typeof PokemonV2PalparkareanameStddevPopFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2PalparkareanameStddevPopFieldsModel */
export { selectFromPokemonV2PalparkareanameStddevPopFields, pokemonV2PalparkareanameStddevPopFieldsModelPrimitives, PokemonV2PalparkareanameStddevPopFieldsModelSelector } from "./PokemonV2PalparkareanameStddevPopFieldsModel.base"

/**
 * PokemonV2PalparkareanameStddevPopFieldsModel
 *
 * aggregate stddev_pop on columns
 */
export const PokemonV2PalparkareanameStddevPopFieldsModel = PokemonV2PalparkareanameStddevPopFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
