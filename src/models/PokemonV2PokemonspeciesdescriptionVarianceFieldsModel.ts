import { Instance } from "mobx-state-tree"
import { PokemonV2PokemonspeciesdescriptionVarianceFieldsModelBase } from "./PokemonV2PokemonspeciesdescriptionVarianceFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2PokemonspeciesdescriptionVarianceFieldsModel */
export interface PokemonV2PokemonspeciesdescriptionVarianceFieldsModelType extends Instance<typeof PokemonV2PokemonspeciesdescriptionVarianceFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2PokemonspeciesdescriptionVarianceFieldsModel */
export { selectFromPokemonV2PokemonspeciesdescriptionVarianceFields, pokemonV2PokemonspeciesdescriptionVarianceFieldsModelPrimitives, PokemonV2PokemonspeciesdescriptionVarianceFieldsModelSelector } from "./PokemonV2PokemonspeciesdescriptionVarianceFieldsModel.base"

/**
 * PokemonV2PokemonspeciesdescriptionVarianceFieldsModel
 *
 * aggregate variance on columns
 */
export const PokemonV2PokemonspeciesdescriptionVarianceFieldsModel = PokemonV2PokemonspeciesdescriptionVarianceFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
