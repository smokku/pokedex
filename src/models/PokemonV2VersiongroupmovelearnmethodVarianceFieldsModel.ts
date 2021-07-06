import { Instance } from "mobx-state-tree"
import { PokemonV2VersiongroupmovelearnmethodVarianceFieldsModelBase } from "./PokemonV2VersiongroupmovelearnmethodVarianceFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2VersiongroupmovelearnmethodVarianceFieldsModel */
export interface PokemonV2VersiongroupmovelearnmethodVarianceFieldsModelType extends Instance<typeof PokemonV2VersiongroupmovelearnmethodVarianceFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2VersiongroupmovelearnmethodVarianceFieldsModel */
export { selectFromPokemonV2VersiongroupmovelearnmethodVarianceFields, pokemonV2VersiongroupmovelearnmethodVarianceFieldsModelPrimitives, PokemonV2VersiongroupmovelearnmethodVarianceFieldsModelSelector } from "./PokemonV2VersiongroupmovelearnmethodVarianceFieldsModel.base"

/**
 * PokemonV2VersiongroupmovelearnmethodVarianceFieldsModel
 *
 * aggregate variance on columns
 */
export const PokemonV2VersiongroupmovelearnmethodVarianceFieldsModel = PokemonV2VersiongroupmovelearnmethodVarianceFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
