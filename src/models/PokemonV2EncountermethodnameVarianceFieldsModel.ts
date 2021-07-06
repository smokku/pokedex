import { Instance } from "mobx-state-tree"
import { PokemonV2EncountermethodnameVarianceFieldsModelBase } from "./PokemonV2EncountermethodnameVarianceFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2EncountermethodnameVarianceFieldsModel */
export interface PokemonV2EncountermethodnameVarianceFieldsModelType extends Instance<typeof PokemonV2EncountermethodnameVarianceFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2EncountermethodnameVarianceFieldsModel */
export { selectFromPokemonV2EncountermethodnameVarianceFields, pokemonV2EncountermethodnameVarianceFieldsModelPrimitives, PokemonV2EncountermethodnameVarianceFieldsModelSelector } from "./PokemonV2EncountermethodnameVarianceFieldsModel.base"

/**
 * PokemonV2EncountermethodnameVarianceFieldsModel
 *
 * aggregate variance on columns
 */
export const PokemonV2EncountermethodnameVarianceFieldsModel = PokemonV2EncountermethodnameVarianceFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
