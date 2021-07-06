import { Instance } from "mobx-state-tree"
import { PokemonV2EncounterslotVarianceFieldsModelBase } from "./PokemonV2EncounterslotVarianceFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2EncounterslotVarianceFieldsModel */
export interface PokemonV2EncounterslotVarianceFieldsModelType extends Instance<typeof PokemonV2EncounterslotVarianceFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2EncounterslotVarianceFieldsModel */
export { selectFromPokemonV2EncounterslotVarianceFields, pokemonV2EncounterslotVarianceFieldsModelPrimitives, PokemonV2EncounterslotVarianceFieldsModelSelector } from "./PokemonV2EncounterslotVarianceFieldsModel.base"

/**
 * PokemonV2EncounterslotVarianceFieldsModel
 *
 * aggregate variance on columns
 */
export const PokemonV2EncounterslotVarianceFieldsModel = PokemonV2EncounterslotVarianceFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
